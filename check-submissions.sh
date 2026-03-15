#!/bin/bash
# Monitor form submissions and notify

SUBMISSIONS_FILE="/home/clawdbot/.openclaw/workspace/ultra-premium-studio/submissions.json"
LAST_CHECK_FILE="/tmp/last_submission_check"

# Create last check file if doesn't exist
if [ ! -f "$LAST_CHECK_FILE" ]; then
    echo "0" > "$LAST_CHECK_FILE"
fi

# Read last check count
LAST_COUNT=$(cat "$LAST_CHECK_FILE")

# Check if submissions file exists
if [ -f "$SUBMISSIONS_FILE" ]; then
    # Count current submissions
    CURRENT_COUNT=$(cat "$SUBMISSIONS_FILE" | grep -c '"id"')
    
    # If new submissions
    if [ "$CURRENT_COUNT" -gt "$LAST_COUNT" ]; then
        # Get the latest submission
        LATEST=$(cat "$SUBMISSIONS_FILE" | python3 -c "import json,sys; data=json.load(sys.stdin); print(json.dumps(data[-1], indent=2))" 2>/dev/null)
        
        # Send notification (you can customize this)
        echo "🚨 NEW FORM SUBMISSION! 🚨"
        echo ""
        echo "$LATEST"
        echo ""
        echo "Check submissions at: $SUBMISSIONS_FILE"
        
        # Update last check count
        echo "$CURRENT_COUNT" > "$LAST_CHECK_FILE"
    fi
fi
