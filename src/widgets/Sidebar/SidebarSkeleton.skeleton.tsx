// @/widgets/SidebarSkeleton/SidebarSkeleton.tsx
import SidebarSection from "@/shared/ui/SidebarSection/SidebarSection";
import { Skeleton } from "@/shared/ui/Skeleton";

import styles from "./SidebarSkeleton.module.css";

interface SidebarSkeletonProps {
  variant: "list" | "detail";
}

export function SidebarSkeleton({ variant }: SidebarSkeletonProps) {
  const isList = variant === "list";

  const containerClass = isList ? styles["sidebar-list"] : styles["sidebar-detail"];

  const renderSkeletons = (count: number, width: string | number, isGrid = false) => {
    return [...Array(count)].map((_, i) => (
      <Skeleton key={i} width={isGrid ? 60 : width} height={36} borderRadius={10} />
    ));
  };

  return (
    <aside className={containerClass}>
      {isList ? (
        <>
          <Skeleton width="100%" height={40} borderRadius={20} style={{ marginBottom: "8px" }} />

          <SidebarSection variant="column">{renderSkeletons(6, "90%")}</SidebarSection>

          <SidebarSection variant="column">{renderSkeletons(5, "75%")}</SidebarSection>

          <SidebarSection variant="row">{renderSkeletons(3, 60, true)}</SidebarSection>

          <SidebarSection variant="row">{renderSkeletons(3, 45, true)}</SidebarSection>

          <SidebarSection variant="row">{renderSkeletons(3, 80, true)}</SidebarSection>
        </>
      ) : (
        <>
          <SidebarSection variant="row">{renderSkeletons(2, 110, true)}</SidebarSection>

          <SidebarSection variant="column">{renderSkeletons(3, "85%")}</SidebarSection>

          <SidebarSection variant="column">{renderSkeletons(4, "65%")}</SidebarSection>
        </>
      )}
    </aside>
  );
}
