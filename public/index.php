<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
include('../server/model/bugModel.php');
include('../server/controller/BugController.php');
include('../server/views/BugView.php');

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/bugstuff.css">
    <link rel="stylesheet" href="./css/bugModal.css">
    <link rel="stylesheet" href="./css/trilliumFlower.css">
    <title>The Bug Report</title>
</head>

<body>


    <?php
    // include('../inc/trilliumSvg.php');
    include('../inc/newBug.php');
    ?>
    <div class="main">

        <div class="header">
            <button data-new-bug class="button-1 small" title="Add New Bug">New</button>

            <button id="new-bug-button" data-new-bug class="button-1" title="Add New Bug">Add New Bug</button>
            <h1>Bug Report</h1>
        </div>

        <div class="bug_report_container">

            <div class="bug_container_header">
                <span class="bug_title">
                    Title
                </span>
                <span class="bug_area">
                    Bug Area
                </span>
                <span class="bug_date">
                    Reported
                </span>
            </div>

            <!-- <div class="bug_container new_bug">
            <span>Add New Bug</span>
        </div> -->
            <?php
            $x = new BugController();
            $x->init();

            ?>

        </div>
    </div>


</body>

</html>
<script src="./index.js" type='module'></script>