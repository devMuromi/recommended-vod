export class CreateVodDto {
  readonly type: number;
  readonly buy_price: number;
  readonly rent_period: number;
  readonly platform_id: number;
  readonly content_id: number;
  readonly vod_name: string;
}
