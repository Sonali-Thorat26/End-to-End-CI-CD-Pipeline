🚀 End-to-End CI/CD Pipeline using Jenkins, Docker, and AWS EC2
📌 Project Overview

This project demonstrates the implementation of an end-to-end CI/CD pipeline to automate application deployment using Jenkins, Docker, and AWS EC2.
The pipeline reduces manual intervention, ensures consistent deployments, and speeds up delivery.

⚙️ Infrastructure Setup
Provisioned an AWS EC2 (Ubuntu) instance
Configured Security Groups:
SSH (Port 22)
Jenkins (Port 8080)
Application (Port 3000)

🔧 Tools & Technologies
AWS EC2
Jenkins
Docker
GitHub
Node.js
Linux
CI/CD

🔄 CI/CD Pipeline Stages
1️⃣ Clone Stage
Fetches source code from GitHub repository
2️⃣ Build Stage
Builds Docker image using Dockerfile
3️⃣ Run Stage
Runs container with port mapping:3000:3000
