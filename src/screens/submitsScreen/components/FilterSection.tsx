'use client';

import { Search, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function FilterSection() {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="pl-12 h-10 text-sm bg-background border-border hover:border-border/70 focus:border-accent transition-colors w-full"
                />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 flex-col sm:flex-row md:flex-row">
                <Button
                    variant="outline"
                    className="h-10 px-4 gap-2 text-sm font-normal border-border hover:border-border/70 hover:bg-background whitespace-nowrap"
                >
                    Tất cả loại
                    <ChevronDown className="w-4 h-4 opacity-60" />
                </Button>

                <Button
                    variant="outline"
                    className="h-10 px-4 gap-2 text-sm font-normal border-border hover:border-border/70 hover:bg-background whitespace-nowrap"
                >
                    Tất cả trạng thái
                    <ChevronDown className="w-4 h-4 opacity-60" />
                </Button>
            </div>
        </div>
    );
}
