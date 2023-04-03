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
        echo <<< "EOL"
                <div id="$id" class="bug_container">
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
