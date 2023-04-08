<?php

class BugController
{
    public function init()
    {
        function is_multi($a) {
            $rv = array_filter($a,'is_array');
            if(count($rv)>0) return true;
            return false;
        }
        $view = new BugView();
        $data = new BugModel();

        $bugs = $data->reslovedBugs(array("type" => "open"));
        $count = count($bugs);
       
        if ($count == 0) {
            $view->showSvg();
            return;
        }
        if(is_multi($bugs)){

            foreach ($bugs as $bug) {
                
                $view->createBug($bug);
            }
        }else{
            $view->createBug($bugs);
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