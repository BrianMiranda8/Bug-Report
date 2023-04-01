<?php

class BugView
{

    private $allBugs;
    private $resolved;
    private $open;
    public function __construct()
    {
    }


    public function row($data)
    {
        echo <<<'EOL'
            <div>
                <span></span>
            <div>
        EOL;
    }
}
