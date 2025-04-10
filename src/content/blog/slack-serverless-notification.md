---
title: "Building a simple notification service using Slack and Serverless infrastructure"
description: "A look into how we built a custom, reliable, and cost-efficient notification system using Google Pub/Sub, Cloud Functions, and Slack at Audion."
date: "Jan 31 2020"
---

*This article was originally published on [Medium](https://medium.com/audion-tech/building-a-simple-notification-service-using-slack-and-serverless-infrastructure-64eeba514da0).*

At Audion, we needed a way to send targeted Slack messages from our microservices for custom alerts, monitoring, and notifications. We aimed for a solution that was reliable, scalable, cost-efficient, and easy to integrate.

We decided to leverage Google Cloud Platform, using Pub/Sub as a message broker and Cloud Functions triggered by Pub/Sub events to interact with the Slack API. This serverless approach allowed for loose coupling and minimal maintenance.

[Read the full article on Medium to dive into the infrastructure details, code implementation, and testing strategy...](https://medium.com/audion-tech/building-a-simple-notification-service-using-slack-and-serverless-infrastructure-64eeba514da0)
