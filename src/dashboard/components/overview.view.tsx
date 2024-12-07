import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { UserPlus } from "lucide-react";
import { useMemo, useState } from "react";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Label,
  Pie,
  PieChart,
  LabelList,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OverView = () => {
  const chartConfig = {
    users: {
      label: "users",
      color: "hsl(var(--chart-1))",
    },
    breads: {
      label: "breads",
      color: "hsl(var(--chart-2))",
    },
    cards: {
      label: "cards",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  const chartData = [
    {
      month: "January",
      users: 186,
      breads: 80,
      cards: 50,
      fill: "hsl(var(--chart-1))",
    },
    {
      month: "February",
      users: 305,
      breads: 200,
      cards: 60,
      fill: "hsl(var(--chart-2))",
    },
    {
      month: "March",
      users: 237,
      breads: 120,
      cards: 70,
      fill: "hsl(var(--chart-3))",
    },
    {
      month: "April",
      users: 73,
      breads: 190,
      cards: 80,
      fill: "hsl(var(--chart-4))",
    },
    {
      month: "May",
      users: 209,
      breads: 130,
      cards: 90,
      fill: "hsl(var(--chart-5))",
    },
    {
      month: "June",
      users: 214,
      breads: 140,
      cards: 100,
      fill: "hsl(var(--chart-1))",
    },
    {
      month: "July",
      users: 250,
      breads: 150,
      cards: 110,
      fill: "hsl(var(--chart-2))",
    },
    {
      month: "August",
      users: 235,
      breads: 150,
      cards: 120,
      fill: "hsl(var(--chart-3))",
    },
    {
      month: "September",
      users: 245,
      breads: 150,
      cards: 130,
      fill: "hsl(var(--chart-4))",
    },
    {
      month: "October",
      users: 225,
      breads: 150,
      cards: 140,
      fill: "hsl(var(--chart-5))",
    },
    {
      month: "November",
      users: 200,
      breads: 150,
      cards: 150,
      fill: "hsl(var(--chart-1))",
    },
    {
      month: "December",
      users: 205,
      breads: 150,
      cards: 160,
      fill: "hsl(var(--chart-2))",
    },
  ];

  const [timeRange, setTimeRange] = useState("90d");

  // Helper function to get recent month names based on the number of months
  const getRecentMonths = (numMonths: number) => {
    const months = [];
    const currentDate = new Date();

    for (let i = 0; i < numMonths; i++) {
      const monthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );
      const monthName = monthDate.toLocaleDateString("en-US", {
        month: "long",
      });
      months.push(monthName);
    }

    return months;
  };

  // Determine the number of months to show based on timeRange
  const monthsToShow = timeRange === "90d" ? 3 : timeRange === "30d" ? 1 : 0;
  const recentMonths = getRecentMonths(monthsToShow);

  // Filter chartData based on the recent months list
  const filteredData = chartData.filter((item) =>
    recentMonths.includes(item.month)
  );

  const totalBreads = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.breads, 0);
  }, []);

  const totalCards = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.cards, 0);
  }, []);

  const totalUsers = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.users, 0);
  }, []);

  const data = useMemo(
    () => [
      {
        id: 1,
        title: "total users",
        total: 100,
        icon: UserPlus,
        className: "bg-success-50 ",
      },
      {
        id: 2,
        title: "total cards",
        total: 180,
        icon: UserPlus,
        className: "bg-primary-50 ",
      },
      {
        id: 3,
        title: "total breads",
        total: 180,
        icon: UserPlus,
        className: "bg-error-70 ",
      },
    ],
    []
  );

  return (
    <ScrollArea className="h-[90vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-5">
        {data.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex flex-col items-center justify-center gap-2 p-4 rounded-md shadow-md",
              item.className
            )}
          >
            <item.icon />
            <h1>{item.title}</h1>
            <h1>{item.total}</h1>
          </div>
        ))}
      </div>

      <div className="h-[300px] mt-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="users" fill="var(--color-users)" radius={4} />
          </BarChart>
        </ChartContainer>

        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="breads" fill="var(--color-breads)" radius={4} />
          </BarChart>
        </ChartContainer>

        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="cards" fill="var(--color-cards)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="breads"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalBreads.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Breads
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="users"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalUsers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Users{" "}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="cards"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCards.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Cards{" "}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>

      <div className="h-[300px] mt-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="users" label nameKey="month" />
          </PieChart>
        </ChartContainer>

        <ChartContainer
          config={chartConfig}
          //   className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="month" hideLabel />}
            />
            <Pie data={chartData} nameKey="month" dataKey="breads">
              <LabelList
                dataKey="month"
                className="fill-background"
                stroke="none"
                fontSize={10}
                formatter={(month: string) => {
                  console.log(month);
                  return month;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="breads"
              type="natural"
              stroke="var(--color-breads)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-breads)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>

        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a time range"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>

        <AreaChart width={800} height={400} data={filteredData}>
          <defs>
            <linearGradient id="fillUsers" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-users)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-users)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillCards" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-cards)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-cards)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={true} />
          <XAxis
            dataKey="month"
            tickLine={true}
            axisLine={true}
            tickMargin={8}
            minTickGap={32}
          />
          <Area
            dataKey="users"
            type="natural"
            fill="url(#fillUsers)"
            stroke="var(--color-users)"
          />
          <Area
            dataKey="breads"
            type="natural"
            fill="url(#fillBreads)"
            stroke="var(--color-breads)"
          />
          <Area
            dataKey="cards"
            type="natural"
            fill="url(#fillCards)"
            stroke="var(--color-cards)"
          />
        </AreaChart>
      </div>
    </ScrollArea>
  );
};

export default OverView;
