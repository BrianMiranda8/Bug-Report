<?php

class BugModel
{
    protected $url;
    public function __construct()
    {
        $this->url = "http://localhost/bugapi/index.php/bug";
    }



    public function getBugData()
    {
        $api = curl_init($this->url);
        curl_setopt($api, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($api);
        curl_close($api);
        return json_decode($response);
    }


    public function getSpecificBugs(array $array)
    {
        $httpQuery = http_build_query($array);
        $api = curl_init($this->url . "?" . $httpQuery);


        curl_setopt($api, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($api);
        curl_close($api);
        return json_decode($response);
    }


    public function reslovedBugs(array $array = array())
    {
        $curl = curl_init();
        $httpQuery = http_build_query($array);

        curl_setopt_array($curl, array(
            CURLOPT_URL => "http://localhost/bugapi/index.php/bug/resolved?" . "$httpQuery",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        return $this->convertDate(json_decode($response, true));
        // return json_decode($response, true);
    }

    private function convertDate($array)
    {
        $newArray = array_map(function ($n) {

            $n['date'] = date('m/d/Y', strtotime($n['date']));

            return $n;
        }, $array);

        return $newArray;
    }
}
