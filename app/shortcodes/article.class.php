<?php
namespace Ticketack\WP\Shortcodes;

use Ticketack\WP\Templates\TKTTemplate;
use Ticketack\Core\Models\Article;
use Ticketack\Core\Base\TKTApiException;

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
        $id = isset($atts['id']) ? $atts['id'] : null;
        if (is_null($id)) {
            return null;
        }

        try {
            $article = Article::find($id);

            return TKTTemplate::render(
                'article/article',
                (object)[
                    'article' => $article,
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
