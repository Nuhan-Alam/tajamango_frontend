import AnimatedCounter from './AnimatedCounter';

const Stats = ({stats}) => {


    return (
        <section class="py-10 bg-[#EFF5D2] sm:py-16 lg:py-20">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold montserrat-700 leading-tight text-black sm:text-4xl lg:text-5xl">Buyers from all over the world</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <AnimatedCounter
            target={stats?.users_count}
            label="Customers"
            description="Buying mangos from us"
            duration={2000}
          />
          
          <AnimatedCounter
            target={stats?.orders_count}
            label="Orders"
            description="within last month"
            duration={2500}
          />
          
          <AnimatedCounter
            target={stats?.products_count}
            label="Products"
            description="Available for you to choose"
            duration={2000}
          />
        </div>
    </div>
</section>

    );
};

export default Stats;