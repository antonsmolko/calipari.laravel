<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SyncStorage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storage:sync
                           {reference=local : The tag name is associated with the storage method. Allowed: s3, local}
                           {--delete : Delete files in the vault if they were deleted from the reference folder}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $ref = $this->argument('reference');
        $delete = $this->option('delete') ? '--delete-removed ' : '';
        $owner = env('STORAGE_OWNER');

        $local = storage_path("app/" . config('uploads.image_upload_path')) . "/";
        $s3 = "s3://" . env('AWS_BUCKET') . "/";

        switch ($ref) {
            case 'local':
                exec("s3cmd " . $delete . "sync " . $local . " " . $s3);
                break;
            case 's3':
                exec("s3cmd " . $delete . "sync " . $s3 . " " . $local);
                exec("chown -R " . $owner . ":" . $owner . " " . $local);
                break;
        }

        return 0;
    }
}
