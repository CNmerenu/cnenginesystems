import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
      <div className="text-center">
        <div className="mb-8">
          <LoadingSpinner size="lg" className="mx-auto border-white/20 border-t-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-white/80">Please wait while we prepare your content</p>
      </div>
    </div>
  );
}