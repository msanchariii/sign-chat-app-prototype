MODE=${1:-dev}

if [ "$MODE" == "dev" ]; then
    echo "Starting in development mode..."
    bun run dev
elif [ "$MODE" == "build" ]; then
    echo "Building and starting preview server..."
    bun run build && bun run preview
else
    echo "❌ Invalid mode: $MODE"
    echo "Usage: ./run.sh [dev|build]"
fi