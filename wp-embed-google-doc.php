<?php
/**
 * Plugin Name: WP Embed Google Doc
 * Description: A plugin to embed Google Docs on your WordPress site with download options.
 * Version: 1.2
 * Author: Dillon Weyer
 */

// Enqueue JavaScript
function embed_google_doc_enqueue_script() {
    wp_enqueue_script(
        'embed-google-doc',
        plugin_dir_url(__FILE__) . 'embed-google-doc.js',
        array(),
        '1.2',
        true
    );
}
add_action('wp_enqueue_scripts', 'embed_google_doc_enqueue_script');

// Shortcode to embed Google Doc
function embed_google_doc_shortcode() {
    return '
        <div id="doc-content">Loading content...</div>
        <div style="margin-top: 10px; text-align: center;">
            <button id="download-pdf" style="display: inline-block; margin-right: 10px;">Download as PDF</button>
            <button id="download-docx" style="display: inline-block;">Download as Word</button>
        </div>
    ';
}
add_shortcode('embed_google_doc', 'embed_google_doc_shortcode');