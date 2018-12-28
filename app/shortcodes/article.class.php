<?php
/**
 * Article shortcode
 *
 * Usage:
 *
 * [tkt_article [template="list|grid|gallery"] [category_ids="1,2,3"]]
 *
 */
class ArticleShortcode extends TKTShortcode
{
    const LIST_TEMPLATE      = 'list';
    const GRID_TEMPLATE      = 'grid';
    const GALLERY_TEMPLATE   = 'gallery';
    const DEFAULT_ITEM_WIDTH = 12;

    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_article";
    }

    /**
     * Get this Shortcode tag
     *
     * @param array $atts: Shortcode attributes
     * @param string $content: Shortcode content
     */
    public function run($atts, $content)
    {
        $template     = isset($atts['template']) ? $atts['template'] : static::LIST_TEMPLATE;
        $category_ids  = isset($atts['category_ids']) ? explode(',', $atts['category_ids']) : null;
        $item_width   = isset($atts['item_width']) ? intval($atts['item_width']) : static::DEFAULT_ITEM_WIDTH;
        try {
            $query = Article::all();

            if (!empty($category_ids)) {
                $query = $query->in_category($category_ids);
            }

            $articles = $query->get('_id,name,description,variants');

	    return TKTTemplate::render(
		'article/'.$template.'/articles',
		(object)[
		    'articles' => $articles,
		    'item_width' => $item_width
		]
	    );
        } catch (TKTApiException $e) {
            return sprintf(
                "Impossible de charger les articles : %s",
                $e->getMessage()
            );
        }
    }
}
