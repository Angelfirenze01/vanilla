<?php
/**
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

namespace Vanilla\Formatting\Quill\Blots\Embeds;

use Vanilla\Formatting\Quill\Blots\AbstractBlot;

/**
 * Base class for creating inline content a value that goes beyond a simple string.
 */
abstract class AbstractInlineEmbedBlot extends AbstractBlot {

    const ZERO_WIDTH_WHITESPACE = "&#65279;";

    /**
     * Get the wrapping HTML tag name for this blot.
     *
     * @return string
     */
    abstract protected function getContainerHTMLTag(): string;

    /**
     * Get the key to pull the main content out of the currentBlot.
     *
     * @return string
     */
    abstract protected static function getInsertKey(): string;

    /**
     * @inheritDoc
     */
    public static function matches(array $operation): bool {
        return valr(static::getInsertKey(), $operation);
    }

    /**
     * Get the class for the wrapping HTML tag. This will generally not be a
     */
    abstract protected function getContainerHMTLAttributes(): array;

    /**
     * @inheritDoc
     */
    public function __construct(array $currentOperation, array $previousOperation = [], array $nextOperation = []) {
        parent::__construct($currentOperation, $previousOperation, $nextOperation);
        $potentialContent = valr(static::getInsertKey(), $this->currentOperation);
        $this->content = is_string($potentialContent) ? htmlspecialchars($potentialContent) : "";
    }

    /**
     * @inheritDoc
     */
    public function render(): string {
        $result = "<" . static::getContainerHTMLTag();

        $attributes = $this->getContainerHMTLAttributes();
        foreach ($attributes as $attrKey => $attr) {
            $result .= " $attrKey=\"$attr\"";
        }

        $result .= ">";
        $result .= $this->content;
        $result .= "</" . static::getContainerHTMLTag() . ">";

        return $result;
    }
}
