<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\WP\TKTApp;
use Ticketack\Core\Models\Article;
use Ticketack\Core\Models\User;
use Ticketack\Core\Base\TKTApiException;
use Ticketack\Core\Base\No2_HTTP;
use Ticketack\Core\Base\TKTRequest;

/**
 * Shop shortcode
 *
 * Usage:
 *
 * [tkt_shop [category_ids="1,2,3"]]
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
        $item_width   = isset($atts['item_width']) ? $atts['item_width'] : static::DEFAULT_ITEM_WIDTH;

        $user       = User::get_current();
        $salepoints = $user->salepoints();

        try {
            $query = Article::all()->in_pos(implode(',', $salepoints));

            if (!empty($category_ids)) {
                $query = $query->in_category($category_ids);
            }

            $articles = $query->get('_id,name,short_description,description,category,stock_type,stocks,variants,posters');

            return TKTTemplate::render(
                'shop/'.$template.'/articles',
                (object)[
                    'articles' => array_chunk(
                        $articles,
                        (int)(12 / $item_width)
                    )
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
