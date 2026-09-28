export function SkeletonBox({ style = {} }) {
  return (
    <div
      className="skeleton"
      style={{ borderRadius: 8, ...style }}
      aria-hidden="true"
    />
  );
}

export function EventCardSkeleton() {
  return (
    <div style={{
      background: "#111113",
      border: "1px solid #27272a",
      borderRadius: 16,
      overflow: "hidden",
    }} aria-label="Loading event…">
      {/* Poster */}
      <SkeletonBox style={{ aspectRatio: "2/3", width: "100%", borderRadius: 0 }} />
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 12 }}>
        <SkeletonBox style={{ height: 20, width: 80 }} />
        <SkeletonBox style={{ height: 22, width: "90%" }} />
        <SkeletonBox style={{ height: 18, width: "60%" }} />
        <SkeletonBox style={{ height: 16, width: "75%" }} />
        <SkeletonBox style={{ height: 38, width: "100%", marginTop: 4 }} />
      </div>
    </div>
  );
}

export function TeamCardSkeleton() {
  return (
    <div style={{
      background: "#111113",
      border: "1px solid #27272a",
      borderRadius: 16,
      padding: 24,
      textAlign: "center",
    }} aria-label="Loading member…">
      <SkeletonBox style={{ width: 88, height: 88, borderRadius: "50%", margin: "0 auto 16px" }} />
      <SkeletonBox style={{ height: 18, width: 120, margin: "0 auto 8px" }} />
      <SkeletonBox style={{ height: 14, width: 90, margin: "0 auto 12px" }} />
      <SkeletonBox style={{ height: 13, width: "100%" }} />
      <SkeletonBox style={{ height: 13, width: "80%", margin: "6px auto 0" }} />
    </div>
  );
}

export function PosterCardSkeleton() {
  return (
    <div style={{ borderRadius: 14, overflow: "hidden" }} aria-label="Loading poster…">
      <SkeletonBox style={{ aspectRatio: "2/3", width: "100%", borderRadius: 14 }} />
    </div>
  );
}

export function PageLoader() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      background: "#09090b",
    }}>
      <div style={{ position: "relative", width: 44, height: 44 }}>
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: "50%",
          border: "2px solid #27272a",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: "50%",
          border: "2px solid transparent",
          borderTopColor: "#3b82f6",
          animation: "spin 0.8s linear infinite",
        }} />
      </div>
      <span style={{ color: "#71717a", fontSize: 13, fontWeight: 500 }}>Loading…</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
