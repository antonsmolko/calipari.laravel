<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PersonalProjectCreate extends Mailable
{
    use Queueable, SerializesModels;

    private array $data;
    private string $pdf;
    private string $fileName;

    /**
     * Create a new message instance.
     *
     * @param array $data
     * @param string $pdf
     * @param string $fileName
     * @return void
     */
    public function __construct(array $data, string $pdf, string $fileName = 'project-details.pdf')
    {
        $this->data = $data;
        $this->pdf = $pdf;
        $this->fileName = $fileName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Фотопанно | Проект № ' . $this->data['number'])
            ->attachData($this->pdf, $this->fileName)
            ->markdown('mail.order.personal-project-create')
            ->with(['data' => $this->data]);
    }
}
