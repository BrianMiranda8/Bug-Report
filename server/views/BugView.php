<?php

class BugView
{
    public function createBug(array $bug)
    {
        // print_r($bug);
        $title = $bug['title'];
        $area = $bug['area'];
        $date = $bug['date'];
        $id = $bug["ID"];
        $problem = $bug['problem'];
        echo <<< "EOL"
                <div id="$id" class="bug_container" data-problem="$problem" data-title="$title" data-area="$area">
                <span class="bug_title">
                    $title
                </span>
                <span class="bug_area">
                    $area
                </span>
                <span class="bug_date">
                   $date
                </span>
            </div>

            EOL;
    }
}
