<?php
/**
 * PEAR::Image_Puzzle
 *
 * PHP version 5
 *
 * LICENSE: This source file is subject to version 3.0 of the PHP license
 * that is available through the world-wide-web at the following URI:
 * http://www.php.net/license/3_0.txt.  If you did not receive a copy of
 * the PHP License and are unable to obtain it through the web, please
 * send a note to license@php.net so we can mail you a copy immediately.
 *
 * @category    Image
 * @package     Image_Puzzle
 * @author      Michal Felski <fela@fela.pl>
 * @license     http://www.php.net/license/3_0.txt  PHP License 3.0
 * @link        http://pear.php.net/package/Image_Puzzle
 * @version     $Id: Line.php 304686 2010-10-24 05:17:02Z clockwerx $
 */

/**
 * Linear edge.
 *
 * @category    Image
 * @package     Image_Puzzle
 * @author      Michal Felski <fela@fela.pl>
 * @license     http://www.php.net/license/3_0.txt  PHP License 3.0
 * @link        http://pear.php.net/package/Image_Puzzle
 * @version     @package_version@
 */
class Image_Puzzle_Edge_Line extends Image_Puzzle_Edge {

    /**
     * @return integer
     * @see Image_Puzzle_Edge::getLeftTopMargin()
     */
    public function getLeftTopMargin() {
        return 0;
    }

    /**
     * @return integer
     * @see Image_Puzzle_Edge::getRightBottomMargin()
     */
    public function getRightBottomMargin() {
        return 0;
    }
}
?>