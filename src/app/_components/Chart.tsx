import React, { useEffect, useRef, ReactNode } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler
);

export interface JournalEntry {
  date: string;
  text: string | ReactNode;
  chart?: number;
}

interface ChartProps {
  entries: JournalEntry[];
  title?: string;
  height?: number;
}

const ChartComponent: React.FC<ChartProps> = ({
  entries,
  title = "Weekly Progress",
  height = 300,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const generateWeekDates = () => {
      const dates = [];
      const today = new Date();

      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        dates.push(date.toISOString().split("T")[0]);
      }

      return dates;
    };

    const weekDates = generateWeekDates();

    const entryMap = new Map<string, number>();
    entries.forEach((entry) => {
      if (entry.chart !== undefined) {
        entryMap.set(entry.date, entry.chart);
      }
    });

    const labels = weekDates.map((date) => {
      const d = new Date(date);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    });

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Rating",
          data: weekDates.map((date) => entryMap.get(date) || null),
          borderColor: "rgb(59, 130, 246)",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderWidth: 3,
          pointBackgroundColor: "rgb(59, 130, 246)",
          pointBorderColor: "rgb(255, 255, 255)",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: true,
          tension: 0.3,
          spanGaps: true,
        },
      ],
    };

    const config = {
      type: "line" as const,
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: !!title,
            text: title,
            font: {
              size: 16,
              weight: "bold" as const,
            },
            padding: {
              bottom: 20,
            },
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems: { dataIndex: number }[]) => {
                const date = weekDates[tooltipItems[0].dataIndex];
                return new Date(date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                });
              },
              label: (tooltipItem: { parsed: { y: number | null } }) => {
                const value = tooltipItem.parsed.y;
                return value !== null ? `Rating: ${value}/10` : "No data";
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            min: 0,
            ticks: {
              stepSize: 1,
              callback: (tickValue: string | number) => {
                return tickValue;
              },
            },
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "index" as const,
        },
      },
    };

    chartRef.current = new Chart(canvasRef.current, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [entries, title, height]);

  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ChartComponent;
