import { featuredWorkData } from '@/lib/constants';
import Card from '@/components/Card';

export default function FeaturedWork() {
  return (
    <div className="mb-[200px]">
      <p className="opacity-50 text-center mb-6">Recent Work</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredWorkData.map((data, index) => (
          <div key={index}>
            <Card
              title={data.title}
              subtitle={data.subtitle}
              link={data.link}
              imageUrl={data.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
