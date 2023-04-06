<?php

class BugController
{
    public function init()
    {
        $view = new BugView();
        $data = new BugModel();

        $bugs = $data->reslovedBugs(array("type" => "open"));
        if (count($bugs) == 0) {
            $view->showSvg();
            return;
        }
        foreach ($bugs as $bug) {
            $view->createBug($bug);
        }

    }

    public function getRow($id)
    {
        $view = new BugView();
        $data = new BugModel();

        $bug = $data->reslovedBugs(array("id" => $id));


        $view->createBug($bug);
    }


}