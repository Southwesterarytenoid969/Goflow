import aiAssistant from '../../../templates/workflow_ai_assistant.json';
import githubRepoMonitor from '../../../templates/github_repo_monitor.json';
import weatherAlert from '../../../templates/weather_alert_flow.json';
import multiBranchStressTest from '../../../templates/multi_branch_stress_test.json';
import uptimeIncidentResponse from '../../../templates/uptime_incident_response.json';
import customerSupportAiTriage from '../../../templates/customer_support_ai_triage.json';
import releaseSmokeTest from '../../../templates/release_smoke_test.json';
import dailySalesDigest from '../../../templates/daily_sales_digest.json';
import webhookOrderFraudCheck from '../../../templates/webhook_order_fraud_check.json';
import rssToDiscordDigest from '../../../templates/rss_to_discord_digest.json';
import githubPrReviewReminder from '../../../templates/github_pr_review_reminder.json';
import serverBackupHealthCheck from '../../../templates/server_backup_health_check.json';
import formToNotionAndEmail from '../../../templates/form_to_notion_and_email.json';
import googleSheetsLeadRouter from '../../../templates/google_sheets_lead_router.json';
import redisQueueWorker from '../../../templates/redis_queue_worker.json';
import webhookPayloadValidatorPlugin from '../../../templates/webhook_payload_validator_plugin.json';
import contentModerationPipeline from '../../../templates/content_moderation_pipeline.json';
import incidentPostmortemGenerator from '../../../templates/incident_postmortem_generator.json';
import pluginLeadScoringRouter from '../../../templates/plugin_lead_scoring_router.json';
import apiErrorBudgetMonitor from '../../../templates/api_error_budget_monitor.json';
import customerChurnSignalMonitor from '../../../templates/customer_churn_signal_monitor.json';

export const workflowTemplates = [
  {
    id: 'plugin-lead-scoring-router',
    title: 'Plugin Lead Scoring Router',
    category: 'Plugins',
    difficulty: 'Advanced',
    summary: 'Score inbound leads with a custom plugin, then route high-value leads to sales.',
    requirements: ['Compiled lead_scorer plugin', 'Telegram credential', 'Redis server'],
    workflow: pluginLeadScoringRouter,
  },
  {
    id: 'webhook-payload-validator-plugin',
    title: 'Webhook Payload Validator Plugin',
    category: 'Plugins',
    difficulty: 'Intermediate',
    summary: 'Validate webhook payloads with a custom plugin before forwarding or alerting.',
    requirements: ['Compiled payload_validator plugin', 'Discord webhook'],
    workflow: webhookPayloadValidatorPlugin,
  },
  {
    id: 'customer-support-ai-triage',
    title: 'Customer Support AI Triage',
    category: 'AI + Support',
    difficulty: 'Advanced',
    summary: 'Classify support tickets with AI, then route urgent and normal cases to different channels.',
    requirements: ['DeepSeek credential', 'Telegram chat ID', 'Slack webhook'],
    workflow: customerSupportAiTriage,
  },
  {
    id: 'content-moderation-pipeline',
    title: 'Content Moderation Pipeline',
    category: 'AI + Trust',
    difficulty: 'Intermediate',
    summary: 'Moderate inbound user content with AI and route unsafe content to Slack.',
    requirements: ['OpenAI credential', 'Slack webhook', 'Redis server'],
    workflow: contentModerationPipeline,
  },
  {
    id: 'incident-postmortem-generator',
    title: 'Incident Postmortem Generator',
    category: 'AI + Ops',
    difficulty: 'Advanced',
    summary: 'Generate a postmortem draft from incident data, save it to Notion, and email stakeholders.',
    requirements: ['DeepSeek credential', 'Notion credential', 'SMTP credential'],
    workflow: incidentPostmortemGenerator,
  },
  {
    id: 'uptime-incident-response',
    title: 'Uptime Incident Response',
    category: 'Monitoring',
    difficulty: 'Intermediate',
    summary: 'Check a health endpoint, store status in Redis, and alert Discord when the endpoint is unhealthy.',
    requirements: ['Health URL', 'Redis server', 'Discord webhook'],
    workflow: uptimeIncidentResponse,
  },
  {
    id: 'api-error-budget-monitor',
    title: 'API Error Budget Monitor',
    category: 'Monitoring',
    difficulty: 'Intermediate',
    summary: 'Poll service metrics, classify error budget health, and alert when burn rate is high.',
    requirements: ['Metrics API URL', 'Discord webhook'],
    workflow: apiErrorBudgetMonitor,
  },
  {
    id: 'server-backup-health-check',
    title: 'Server Backup Health Check',
    category: 'Monitoring',
    difficulty: 'Intermediate',
    summary: 'Run a remote backup check over SSH and alert when backups fail.',
    requirements: ['SSH credential', 'Discord webhook', 'Redis server'],
    workflow: serverBackupHealthCheck,
  },
  {
    id: 'release-smoke-test',
    title: 'Release Smoke Test',
    category: 'DevOps',
    difficulty: 'Advanced',
    summary: 'Pull code, restart a remote service, run a public health check, and notify success or failure.',
    requirements: ['Git repo path', 'SSH credential', 'Telegram or Discord'],
    workflow: releaseSmokeTest,
  },
  {
    id: 'redis-queue-worker',
    title: 'Redis Queue Worker',
    category: 'Backend Jobs',
    difficulty: 'Intermediate',
    summary: 'Poll a Redis queue, send jobs to an HTTP API, and record processed work.',
    requirements: ['Redis server', 'Worker API URL'],
    workflow: redisQueueWorker,
  },
  {
    id: 'github-pr-review-reminder',
    title: 'GitHub PR Review Reminder',
    category: 'Developer Tools',
    difficulty: 'Beginner',
    summary: 'Check open pull requests and remind the team in Slack when review work exists.',
    requirements: ['GitHub repo URL', 'Slack webhook'],
    workflow: githubPrReviewReminder,
  },
  {
    id: 'daily-sales-digest',
    title: 'Daily Sales Digest',
    category: 'Business Ops',
    difficulty: 'Intermediate',
    summary: 'Fetch sales data, summarize it with JavaScript, and email a daily digest.',
    requirements: ['Sales API URL', 'SMTP credential'],
    workflow: dailySalesDigest,
  },
  {
    id: 'webhook-order-fraud-check',
    title: 'Webhook Order Fraud Check',
    category: 'Business Ops',
    difficulty: 'Intermediate',
    summary: 'Classify inbound orders and route suspicious orders to manual review.',
    requirements: ['Telegram credential', 'Redis server'],
    workflow: webhookOrderFraudCheck,
  },
  {
    id: 'form-to-notion-and-email',
    title: 'Form To Notion And Email',
    category: 'CRM',
    difficulty: 'Intermediate',
    summary: 'Create a Notion page from a website form submission and send a confirmation email.',
    requirements: ['Notion credential', 'SMTP credential'],
    workflow: formToNotionAndEmail,
  },
  {
    id: 'google-sheets-lead-router',
    title: 'Google Sheets Lead Router',
    category: 'CRM',
    difficulty: 'Intermediate',
    summary: 'Append inbound leads to Google Sheets and notify sales for enterprise leads.',
    requirements: ['Google Sheets credential', 'Slack webhook'],
    workflow: googleSheetsLeadRouter,
  },
  {
    id: 'customer-churn-signal-monitor',
    title: 'Customer Churn Signal Monitor',
    category: 'Customer Success',
    difficulty: 'Intermediate',
    summary: 'Detect churn-risk activity, create a Notion follow-up, and notify the CS team.',
    requirements: ['Customer API URL', 'Notion credential', 'Slack webhook'],
    workflow: customerChurnSignalMonitor,
  },
  {
    id: 'rss-to-discord-digest',
    title: 'RSS To Discord Digest',
    category: 'Content Ops',
    difficulty: 'Beginner',
    summary: 'Fetch a feed, summarize it with AI, and post the digest to Discord.',
    requirements: ['DeepSeek credential', 'Discord webhook'],
    workflow: rssToDiscordDigest,
  },
  {
    id: 'weather-alert',
    title: 'Weather Alert Flow',
    category: 'API Automation',
    difficulty: 'Beginner',
    summary: 'Fetch live weather data from Open-Meteo and branch based on fetch status.',
    requirements: ['Internet access'],
    workflow: weatherAlert,
  },
  {
    id: 'github-repo-monitor',
    title: 'GitHub Repo Monitor',
    category: 'Developer Tools',
    difficulty: 'Beginner',
    summary: 'Poll GitHub API data and process repository status on a schedule.',
    requirements: ['GitHub API URL'],
    workflow: githubRepoMonitor,
  },
  {
    id: 'ai-assistant-pipeline',
    title: 'AI Text Pipeline',
    category: 'AI',
    difficulty: 'Beginner',
    summary: 'Receive a webhook, prepare a prompt, call DeepSeek, and format the result.',
    requirements: ['DeepSeek API key'],
    workflow: aiAssistant,
  },
  {
    id: 'multi-branch-stress-test',
    title: 'Multi-Branch Stress Test',
    category: 'Testing',
    difficulty: 'Intermediate',
    summary: 'Exercise parallel workflow branches with multiple HTTP requests.',
    requirements: ['Internet access'],
    workflow: multiBranchStressTest,
  },
];
