## DevTools - Network Tab

Lab 4 DevTools site: https://cse110-f2021.github.io/Lab4_Hosted/

To wrap up the expose section we’re going to take a peek into the network tab a bit, and see what all the graphs and text and headers are about.

Your first step will be to open your DevTools and navigate to the Network tab. Once that’s open, click the “Fetch Data” button on the webpage and observe your Network tab for the new json file that will appear.

Once it finishes downloading, answer the following questions:

1. What is the name of the new json file?
    - ```citylots.json```
2. Which file initiated the download of the new file?
    - ```expose.js```
3. What is its file size?
    - 779 kB
4. How long did it take to download?
    - 773 ms
 

Next, select that file to bring up a new side panel to answer the following:

5. What was your User-Agent for the browser that made the request?
    - ```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36```
6. In the response, what type of server did it come from?
    - ```GitHub.com```
7. When was the file last modified?
    - ```Tue, 12 Oct 2021 18:38:02 GMT```
8. What was the Content-Type of the file?
    - ```application/json; charset=utf-8```
  
Navigate to the Initiator tab now and answer the last question

9. Which method inside the initiating file made the request?
    - ```fetchData()```