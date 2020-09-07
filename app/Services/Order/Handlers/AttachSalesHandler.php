<?php


namespace App\Services\Order\Handlers;


use App\Models\Order;
use App\Services\Order\Repositories\ClientOrderRepository;
use Illuminate\Database\Eloquent\Collection;

class AttachSalesHandler
{
    private ClientOrderRepository $repository;

    /**
     * AttachSalesHandler constructor.
     * @param ClientOrderRepository $repository
     */
    public function __construct(ClientOrderRepository $repository) {
        $this->repository = $repository;
    }

    /**
     * @param Order $order
     * @param Collection $sales
     */
    public function handle(Order $order, Collection $sales)
    {
        $attachData = $sales->pluck('id')
            ->combine($sales
                ->map(fn ($sale) => [
                    'selling_price' => getItemPrice(
                        $sale->width_cm,
                        $sale->height_cm,
                        $sale->texture->price,
                        $sale->discount
                    )]
                )
            );

        $this->repository->attachSales($order, $attachData);
    }
}
