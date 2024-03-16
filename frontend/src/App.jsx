import "./App.css";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

function App() {
  return (
    <div className=" flex justify-center overflow-x-hidden bg-stone-950">
      <div className="flex flex-col relative w-full lg:basis-8/12 bg-stone-950">
        {/* Header */}
        <div className="flex justify-between content-center h-20 p-5">
          <div className="size-fit text-4xl font-semibold">Switchr.</div>
          <div></div>
        </div>
        <Separator />
        {/* Top Content */}
        <div className="flex gap-4 basis-80 bg-stone-700">
          <div className="size-full  bg-stone-600"></div>

          <div className="size-full bg-stone-600" />
        </div>
        {/* Bottom Content */}
        <div className="flex flex-col justify-center mt-4">
          <div className="mb-4">
            <FilterGroup />
          </div>
          <div className="mb-4">
            <ModEntries />
            <ModEntries />
            <ModEntries />
            <ModEntries />
            <ModEntries />
            <ModEntries />
            <ModEntries />
          </div>
          <PaginationDemo />
        </div>
      </div>
    </div>
  );
}

export function FilterGroup() {
  return (
    <ToggleGroup className="" type="multiple">
      <ToggleGroupItem value="test" aria-label="Test Toggle">
        <span className="">Testing</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="test1" aria-label="Test Toggle">
        Testing
      </ToggleGroupItem>
      <ToggleGroupItem value="test2" aria-label="Test Toggle">
        Testing
      </ToggleGroupItem>
      <ToggleGroupItem value="test3" aria-label="Test Toggle">
        Testing
      </ToggleGroupItem>
      <ToggleGroupItem value="test4" aria-label="Test Toggle">
        Testing
      </ToggleGroupItem>
      <ToggleGroupItem value="test5" aria-label="Test Toggle">
        Testing
      </ToggleGroupItem>
      <ToggleGroupItem value="test6" aria-label="Test Toggle">
        Testing
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export function ModEntries({ children }) {
  return (
    <div className="grid grid-cols-12 items-center [&>div]:table-cell [&>div]:size-fit w-full font-medium text-md rounded-lg border border-stone-700 p-2 mt-2 bg-stone-950 text-stone-100">
      <div className="col-span-1 font-semibold">
        <span>ES2002</span>
      </div>
      <div className="col-span-3">
        <span>Has: G04 (Mon 3pm-6pm)</span>
      </div>
      <div className="col-span-3">
        <span>Wants: G09 (Tue 3pm-6pm)</span>
      </div>
      <div className="col-span-3">
        <span>Remarks: pls pls pls pls</span>
      </div>
      <div className="col-start-12">
        <Button>Testing</Button>
      </div>
    </div>
  );
}

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default App;
