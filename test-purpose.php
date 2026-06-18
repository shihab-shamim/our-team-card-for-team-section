<?php
/**
 * Plugin Name: Our Team Cards
 * Description: Our Team Cards is a WordPress plugin that allows you to create nice box effects on your website.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:team-section
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'OTFC_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'OTFC_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'OTFC_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'OTFCPlugin' ) ){
	class OTFCPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new OTFCPlugin();
}