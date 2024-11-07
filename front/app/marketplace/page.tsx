import React from "react";
import PageHeader from "@/components/PageHeader";
import SearchFilter from "@/components/Marketplace/SearchFilter";
import FilterBar from "@/components/Marketplace/FilterBar";
export default function page() {
  return (
    <div className="container mx-auto">
      <PageHeader
        pageTitle="Browse Marketplace"
        pageDescription="Browse through more than 50k NFTs on the NFT Marketplace."
      />

      <div>
        <SearchFilter />
      </div>
      <div>
        <FilterBar />
      </div>
    </div>
  );
}
