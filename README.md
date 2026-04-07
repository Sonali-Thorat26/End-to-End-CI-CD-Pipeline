🚀 End-to-End CI/CD Pipeline using Jenkins, Docker, and AWS EC2
📌 Project Overview
Designed and implemented an end-to-end CI/CD pipeline to automate application deployment using Jenkins, Docker, and AWS EC2. This reduced manual deployment effort and improved consistency.

⚙️ Infrastructure Setup
Provisioned AWS EC2 (Ubuntu) instance
Configured security groups:
SSH (22)
Jenkins (8080)
Application (3000)
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
Runs container with port mapping:
