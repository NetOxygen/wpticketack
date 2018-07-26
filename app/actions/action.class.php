<?php
/**
 * Base action
 */
abstract class TKTAction
{
    /**
     * @var TKTApp
     */
    protected $app;

    public function __construct(TKTApp $app)
    {
        $this->app = $app;

        add_action(
            $this->get_tag(),
            array($this, 'run')
        );
    }

    /**
     * Get this action tag
     *
     * @return string: The tag to use to run this shortcode
     */
    abstract public function get_tag();

    /**
     * Run this action
     */
    abstract public function run();
}

