$(document).foundation({
    accordion: {
        multi_expand: true    
    }
});

/**
 * BCERP is a module that contains functionality for the BCERP website.
 * It serves as a single namespace to avoid collisions. Other modules should be part of its namespace, e.g. BCERP.UTILS.
 * It has the following dependencies: jQuery
 */
var BCERP = (function($, window){
    var self = {};

    function saveAnswer(){
        var form = $('form');
        var href = $('#skip-button').attr('href');
        var nextButton = $('<a></a>').attr('href', href).addClass("button small radius").html("Next &raquo;");
    
        // replace the form submit button with a simple link since the user won't have to submit the form normally
        var submitButton = form.find('button[type="submit"]').replaceWith(nextButton);
            
        $.ajax({
            url: window.location.href,
            type: "POST",
            data: form.serialize(),
            success: function(data, textStatus, $xhr){
                if (data.status != true) {
                    // something went wrong on the back-end, so change the button back for normal POST
                    nextButton.replaceWith(submitButton);
                } else {
                    var progress = data.progress;
                    
                    $('#progress-meter').css('width', progress + '%');
                    $('#percent-complete').text(progress + "% done");
                }
            },
            error: function($xhr, textStatus, error){
                // a network error most likely occurred, so change the button back for normal POST
                nextButton.replaceWith(submitButton);
            }
        });
    }    
    
    self.init = function(){
        self.bindEvents();    
    };
    
    self.bindEvents = function(){
        /**
         * On all questions except height and weight do the following when an answer is chosen:
         * 1. Send an AJAX request to save the answer to the database
         * 2. Flash the risk messaging appropriate for the choice
         */
        $('.question input, .question select').filter(':not(#question6, #question7)').on('change', function(){
            saveAnswer();
            
            var $this = $(this);
            var riskMessageBlock = $('#risk-message');
            var riskLevel = $this.data('risk');
        
            if (this.nodeName.toLowerCase() == "select") {
                //the data-risk attribute is on each <option> inside the <select>, not on the <select> itself
                riskLevel = $this.find(':selected').data('risk');
            }
            
            if (riskLevel == "higher-risk") {
                riskMessageBlock.html(riskMessages["higher-risk"]);
            } else if (riskLevel == "lower-risk") {
                riskMessageBlock.html(riskMessages["lower-risk"]);
            } else {
                riskMessageBlock.empty();
            }
            riskMessageBlock.css('background', '#FFFF6B')
                            .stop()
                            .animate({
                                backgroundColor: "transparent"
                            }, 1500);
        });
        
        $('#question6, #question7').on('change', function(){
            var $this = $(this);
            
            $this.find(":selected").data('selected', true);
            updateHeightAndWeight();
        });
        
        function updateHeightAndWeight(args) {
            var bmi = null;
            var status = null;
            var height = null;
            var weight = null;
            var message = null;
            
            var riskMessageBlock = $('#risk-message');
            
            //select > option values are question_option_id, so use the data-value property which
            //stores the actual height/weight values, rather than parsing #' #" to create inches
            height = $('#question6 :selected').data('value');
            weight = $('#question7 :selected').data('value');
            
            //the dropdowns have defaults that the user may not want, so use data-selected to determine
            //if user chose these values or they were "selected" when page loaded
            heightUpdatedByUser = BCERP.UTILS.isDefined($('#question6 :selected').data("selected"));
            weightUpdatedByUser = BCERP.UTILS.isDefined($('#question7 :selected').data("selected"));
            
            if (heightUpdatedByUser && weightUpdatedByUser &&
                BCERP.UTILS.isDefined(height) && BCERP.UTILS.isDefined(weight)) {
                saveAnswer();
                
                //calculate BMI (if BMI has already been calculated, this will run unnecessarily on subsequent page loads)
                bmi = BCERP.UTILS.calculateBmi(weight, height);
                status = BCERP.UTILS.convertBmiToStatus(bmi);
        
                if (bmi >= 25) {
                    //higher risk
                    message = $(riskMessages["higher-risk"]);
                } else {
                    //lower risk
                    message = $(riskMessages["lower-risk"]);
                }
                
                message.find('span').after(' Your BMI is ' + bmi + '.');
                
                riskMessageBlock.html(message);
                riskMessageBlock.css('background', '#FFFF6B')
                            .stop()
                            .animate({
                                backgroundColor: "transparent"
                            }, 1500);        
            }                
        }        
    };
    
    
    return self;
})(jQuery, window);

/**
 * This module has some utility functions used in other modules.
 * It has no dependencies.
 */
BCERP.UTILS = (function(){
    var self = {};
    
    self.isDefined = function(arg){
        return !(typeof arg === "undefined" || arg === null || arg === ""); 
    }
    
    self.convertBmiToStatus = function(BMI){
        if (BMI < 18.5) {
            return "Underweight";
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            return "Normal";
        } else if (BMI >= 25 && BMI <= 29.9 ) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }

    self.calculateBmi = function(weightInPounds, heightInInches) {
        return ((weightInPounds/Math.pow(heightInInches, 2)) * 703).toFixed(1);
    }

    return self;    
})();

BCERP.init();