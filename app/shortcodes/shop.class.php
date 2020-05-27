<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Article;
use Ticketack\Core\Base\TKTApiException;

/**
 * Shop shortcode
 *
 * Usage:
 *
 * [tkt_article [template="list|grid|gallery"] [category_ids="1,2,3"]]
 *
 */
class ShopShortcode extends TKTShortcode
{
    const LIST_TEMPLATE      = 'list';
    const GRID_TEMPLATE      = 'grid';
    const GALLERY_TEMPLATE   = 'gallery';
    const SLIDER_TEMPLATE    = 'slider';
    const DEFAULT_ITEM_WIDTH = 12;

    /**
     * Get this Shortcode tag
     *
     * @return string: The tag to use to run this shortcode
     */
    public function get_tag()
    {
        return "tkt_shop";
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
        $category_ids = isset($atts['category_ids']) ? explode(',', $atts['category_ids']) : null;

        try {
            $query = Article::all();

            if (!empty($category_ids)) {
                $query = $query->in_category($category_ids);
            }

            $articles = $query->get('_id,name,additional_name,description,variants,posters');

            return TKTTemplate::render(
                'shop/'.$template.'/articles',
                (object)[
                    'articles' => $articles,
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
