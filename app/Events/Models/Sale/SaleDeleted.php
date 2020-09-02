<?php

namespace App\Events\Models\Sale;


use App\Models\Sale;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SaleDeleted
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public Sale $sale;

    /**
     * Create a new event instance.
     *
     * @param Sale $sale
     */
    public function __construct(Sale $sale)
    {
        $this->sale = $sale;
    }
}
