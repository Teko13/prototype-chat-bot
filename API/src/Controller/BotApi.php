<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class BotApi {
    public $client;
    public function __construct(HttpClientInterface $client) {
        $this->client = $client;
    }
    #[Route("/", name:"bot")]
    public function api(Request $request) {
        $apiKey = "d7ef8bf1198f5e1b2c42bd2367a23157";
        $idBrain = "fd3eddf5-b6cf-4055-bdf7-f21d1b967113";
        $idChat = "9ebfa2a9-2e35-45de-9d01-605994babe2d";
        $question = urldecode($request->query->get('question'));
        $params = [
            'headers' => [
                'Authorization' => 'Bearer '. $apiKey,
                'Content-Type' => 'application/json',
            ],
            "json" => [
                "question" => $question,
            ]
            ];
        $url = "https://api.quivr.app/chat/$idChat/question?brain_id=$idBrain";
        $response = $this->client->request("POST", $url, $params);
        return new JsonResponse($response->getContent());
    }
}