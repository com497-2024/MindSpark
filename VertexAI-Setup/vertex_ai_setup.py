#This is the first file that will have the set up of the VERTEX AI:
from google.cloud import aiplatform

def initialize_vertex_ai_sdk(project_id, region, staging_bucket):
    # Initialize the Vertex AI SDK
    aiplatform.init(project=project_id, location=region)

    # Set the staging bucket for the SDK
    aiplatform.init(
        staging_bucket=staging_bucket
    )

# Replace these values with your project details
project_id = "MindSpark-AI"
region = "us-central1"
staging_bucket = "gs://your-staging-bucket"

# Call the initialization function with your project details
initialize_vertex_ai_sdk(project_id, region, staging_bucket)
