### How to Translate English to Mandalorian with Twilio Serverless and SMS
![header img](https://twilio-cms-prod.s3.amazonaws.com/images/mandoheader2.width-1616.png)
Test the app out by texting a sentence to +14807573107 
![img example](https://pbs.twimg.com/media/E0kIdbYUYAQ39QJ?format=jpg&name=large)

#### Prerequisites
1. A Twilio account - [sign up for a free one here and receive an extra $10 if you upgrade through this link](http://www.twilio.com/referral/iHsJ5D)
2. A Twilio phone number with SMS capabilities - [configure one here](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console)
3. Node.js installed - [download it here](https://nodejs.org/en/download/)

#### Steps
Download this repo and then install the Twilio CLI to use the Twilio Serverless Toolkit
```bash
npm install twilio-cli -g
twilio login
twilio plugins:install @twilio-labs/plugin-serverless
```
`cd` into the `\functions` directory and then run 
```bash
twilio serverless:deploy
```
In the [phone numbers section of your Twilio Console](https://www.twilio.com/console/phone-numbers/incoming), select the Twilio number you purchased and scroll down to the <em>Messaging</em> section. Under <em>A MESSAGE COMES IN</em> change <em>Webhook</em> to <em>Function</em> and then under <em>Service</em> select <em>Mandalorian-Translation</em>, for <em>Environment</em> select <em>dev-environment</em>, and then for <em>Function Path</em> select <em>/translate</em>.
![image of phone number configuration](https://twilio-cms-prod.s3.amazonaws.com/images/3OiTUXXmAIZFIMO7MaIV9HpbkISpS9xqx4PiAvpj9dLBg.width-1600.png)
Finally click the <strong>Save</strong> button below and text your number!
![img example](https://pbs.twimg.com/media/E0kIdbYUYAQ39QJ?format=jpg&name=large)