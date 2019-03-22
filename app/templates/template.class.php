<?php
/**
 * Templating engine
 */
class TKTTemplate
{
    public static function render($template, $data)
    {
        // Check if an override template file is found in the active theme
        $filepath = OVERRIDE_DIR.'/ticketack/templates/'.$template.'.tpl.php';
        if (file_exists($filepath)) {
            return static::output($filepath, $data);
        }

        $filepath = TKT_TEMPLATES.'/'.$template.'.tpl.php';
        if (!file_exists($filepath)) {
            throw new Exception(sprintf(
                "Template file %s not found",
                $filepath
            ));
        }

        return static::output($filepath, $data);
    }

    public static function render_admin($template, $data = [])
    {
        $filepath = TKT_TEMPLATES.'/_admin/'.$template.'.tpl.php';
        if (!file_exists($filepath)) {
            throw new Exception(sprintf(
                "Template file %s not found",
                $filepath
            ));
        }

        return static::output($filepath, $data);
    }

    protected static function output($template, $data)
    {
        ob_start();
        require($template);
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }
}
