export class CreateVodDto {
  readonly platformId: number;
  readonly contentId: number;
  readonly type: number; // Subcribe or purchase or rental
  readonly price: number; // If purchase or rental
  readonly rentalPeriod: string; // If rental
}
