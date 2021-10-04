class LocalInfo extends HTMLElement {
  
  set coronaItem(item) {
    this._coronaItem = item;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-fluid pt-5 pb-5 text-center">
      <h2 class="title-font fs-2 mb-3">Indonesia Info Covid19</h2>
      <p class="description-text">Update terakhir pada ${this._coronaItem.lastUpdate}.</p>
      <div class="row">
        <article class="col-lg-4 col-md-4 col-sm-12">
          <div class="card bg-card" data-aos="fade-right" data-aos-duration="1000">
            <div class="card-body">
              <h3 class="card-title txt-confirmed">${this._coronaItem.confirmed.value}</h3>
              <p class="card-text text-light fs-6">Terkonfirmasi</p>
            </div>
          </div>
        </article>
        <article class="col-lg-4 col-md-4 col-sm-12">
          <div class="card bg-card" data-aos="zoom-in" data-aos-duration="1000">
            <div class="card-body">
              <h3 class="card-title txt-dead">${this._coronaItem.deaths.value}</h3>
              <p class="card-text text-light fs-6">Meninggal</p>                    
            </div>
          </div>
        </article>
        <article class="col-lg-4 col-md-4 col-sm-12">
          <div class="card bg-card" data-aos="fade-left" data-aos-duration="1000">
            <div class="card-body">
              <h3 class="card-title txt-recovered">${this._coronaItem.recovered.value}</h3>
              <p class="card-text text-light fs-6">Sembuh</p>
            </div>
          </div>
        </article>
      </div>
    </div>`;
  }
}

customElements.define('local-info', LocalInfo);
