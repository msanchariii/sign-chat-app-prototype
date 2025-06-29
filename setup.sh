#!/bin/bash

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "⚙️ bun not found. Installing globally via npm..."
    npm install -g bun
else
    echo "✅ bun is already installed."
fi

# Run bun install
echo "📦 Installing project dependencies..."
bun install
