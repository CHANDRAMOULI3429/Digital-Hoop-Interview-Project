import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Plus,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CalendarHeader() {
  const viewButtons = [
    { id: "monthly", label: "Monthly view" },
    { id: "weekly", label: "Weekly view" },
    { id: "daily", label: "Daily view" },
    { id: "list", label: "List view" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 space-y-4">
      {/* Row 1: Left calendar + title + right buttons */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Left: Calendar Box + Title */}
        <div className="flex items-center gap-4">
          {/* JUL 21 calendar pill */}
          <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none px-2 hover:bg-gray-200"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </Button>
            <div className="flex flex-col px-3 items-center justify-center bg-white">
              <span className="text-xs font-semibold text-gray-500 tracking-wider">
                JUL
              </span>
              <span className="text-lg font-bold text-gray-800 leading-none">
                21
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none px-2 hover:bg-gray-200"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </Button>
          </div>

          {/* Month title */}
          <div>
            <h1 className="text-xl font-bold text-gray-800">July 2025</h1>
            <p className="text-sm text-gray-500">
              Jul 20, 2025 – Jul 26, 2025
            </p>
          </div>
        </div>

        {/* Right: Filter + Views + New Appointment */}
        <div className="flex flex-wrap items-center gap-2 justify-end">
          <Button
            variant="outline"
            className="gap-2 px-4 py-2 text-sm border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          {viewButtons.map((btn) => (
            <Button
              key={btn.id}
              variant={btn.id === "daily" ? "default" : "ghost"}
              className={`text-sm font-medium px-4 py-2 rounded-md ${btn.id === "daily"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
            >
              {btn.label}
            </Button>
          ))}
          <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 text-sm font-medium hover:opacity-90">
            + New Appointment
          </Button>
        </div>
      </div>

      {/* Row 2: Arrows + Search */}
      {/* Row 2: Search left + Arrows right */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Search */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search doctor name..."
            className="pl-10 bg-gray-100 border border-gray-300 text-sm h-10 w-full"
          />
        </div>

        {/* Right: Arrows */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 hover:bg-gray-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
