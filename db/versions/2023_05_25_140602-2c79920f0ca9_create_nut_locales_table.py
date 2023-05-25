"""create nut.locales table

Revision ID: 2c79920f0ca9
Revises: 38b92179a574
Create Date: 2023-05-25 14:06:02.412056

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2c79920f0ca9'
down_revision = '38b92179a574'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'locales',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('lang', sa.Integer, nullable=False, server_default='0'),
        sa.Column('code', sa.String(length=255), nullable=False),
        sa.Column('message', sa.Text, nullable=False),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_locales_lang_code', 'locales',
                    ['lang', 'code'], unique=True)
    op.create_index('idx_locales_code', 'locales', ['code'])


def downgrade() -> None:
    op.drop_table('locales')
