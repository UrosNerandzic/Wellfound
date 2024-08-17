"use client";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationSection() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [pageNum, setPageNum] = useState(Number(searchParams.get("page") ?? 1));

  function updateUrl(newPageNum) {
    const params = new URLSearchParams(searchParams);
    if (newPageNum === 1) {
      params.delete("page");
    } else {
      params.set("page", newPageNum.toString());
    }
    replace(`${pathname}?${params}`);
  }

  function nextPage() {
    const nextPageNum = pageNum + 1;
    setPageNum(nextPageNum);
    updateUrl(nextPageNum);
  }

  function previousPage() {
    if (pageNum > 1) {
      const prevPageNum = pageNum - 1;
      setPageNum(prevPageNum);
      updateUrl(prevPageNum);
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        {pageNum > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={previousPage} href="#" />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#" aria-current="page">
            {pageNum}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={nextPage} href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationSection;
