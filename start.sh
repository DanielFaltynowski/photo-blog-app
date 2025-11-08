#!/bin/bash

# ===============================================
# Server launcher script
# Checks if Node.js is installed and up to date,
# then starts the backend server.
# ===============================================

REQUIRED_VERSION=18

# Check if Node.js is installed
if command -v node >/dev/null 2>&1; then
    echo "✅ Node.js is installed."

    # Get current Node.js major version
    CURRENT_VERSION=$(node -v | sed 's/v\([0-9]*\).*/\1/')

    # Compare versions
    if [ "$CURRENT_VERSION" -lt "$REQUIRED_VERSION" ]; then
        echo "⚠️  Your Node.js version is $CURRENT_VERSION.x"
        echo "Please install Node.js version $REQUIRED_VERSION.x or higher."
        exit 1
    else
        echo "🚀 Starting the server with Node.js v$CURRENT_VERSION..."
        node ./backend/server.js
    fi
else
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js to run this project."
    echo "Download it here: https://nodejs.org/"
    exit 1
fi
