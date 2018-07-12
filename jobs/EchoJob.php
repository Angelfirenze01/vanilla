<?php

/**
 * @license Proprietary
 * @copyright 2009-2018 Vanilla Forums Inc.
 */

namespace Vanilla\Job;

use Garden\QueueInterop\AbstractJob;
use Psr\Log\LogLevel;

/**
 * Vanilla Test Job: EchoJob
 *
 * @author Eric Vachaviolos <eric.v@vanillaforums.com>
 */
class EchoJob extends AbstractJob {

    /**
     * Run job
     *
     * @throws \Exception
     */
    public function run() {

        $this->log(LogLevel::NOTICE, "Echo job running");

        $message = $this->get('message');

        $this->log(LogLevel::NOTICE, "  Echoing inputted message *** {msg} ***", [
            'msg' => $message
        ]);

    }

}