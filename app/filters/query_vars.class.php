<?php
/**
 * Query Vars filter
 */
class QueryVarsFilter extends TKTFilter
{
    /**
     * Get this filter tag
     *
     * @return string: The tag to use
     */
    public function get_tag()
    {
        return "query_vars";
    }

    /**
     * Run this filter
     */
    public function run($args = null)
    {
        array_push($args, 'id');
        array_push($args, 'book');
        array_push($args, 'd');

        return $args;
    }
}
