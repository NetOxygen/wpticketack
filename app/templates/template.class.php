<?php

namespace Ticketack\WP\Templates;

/**
 * Templating engine
 */
class TKTTemplate
{
    /**
     * Find and parse a template file with the provided data
     *
     * @param string $template
     * @param object $data
     *
     * @return string
     */
    public static function render($template, $data)
    {
        // Check if an override template file is found in the active theme
        $filepath = TKT_OVERRIDE_DIR.'/ticketack/templates/'.$template.'.tpl.php';
        if (file_exists($filepath)) {
            return static::parse($filepath, $data);
        }

        $filepath = TKT_TEMPLATES.'/'.$template.'.tpl.php';
        if (!file_exists($filepath)) {
            if (is_admin()) {
                tkt_flash_notice(sprintf(
                    "Template file %s not found",
                    $filepath
                ), "error");
                return false;
            } else {
                throw new \Exception(sprintf(
                    "Template file %s not found",
                    $filepath
                ));
            }
        }

        return static::parse($filepath, $data);
    }

    /**
     * Find and parse an admin template file with the provided data
     *
     * @param string $template
     * @param object $data
     *
     * @return string
     */
    public static function render_admin($template, $data = [])
    {
        $filepath = TKT_TEMPLATES.'/_admin/'.$template.'.tpl.php';
        if (!file_exists($filepath)) {
            throw new \Exception(sprintf(
                "Template file %s not found",
                $filepath
            ));
        }

        return static::parse($filepath, $data);
    }

    /**
     * Find, parse and output a template file with the provided data
     *
     * @param string $template
     * @param object $data
     *
     * @return string
     */
    public static function output($template, $data)
    {
        echo wp_kses(static::render($template, $data), tkt_allowed_tags());
    }

    /**
     * Find, parse and output an admin template file with the provided data
     *
     * @param string $template
     * @param object $data
     *
     * @return string
     */
    public static function output_admin($template, $data)
    {
        echo wp_kses(static::render_admin($template, $data), tkt_allowed_tags());
    }

    /**
     * Parse a template file with the provided data
     *
     * @param string $template
     * @param object $data
     *
     * @return string
     */
    protected static function parse($template, $data)
    {
        ob_start();
        require($template);
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }
}
